import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import Appcontainer from '../../components/Appcontainer';
import Spacer, {
  Spacer1,
  Spacer3,
  Spacer5,
  Spacer8,
} from '../../components/Spacer';
import Button1 from '../../components/Button1';
import {height, width} from 'react-native-dimension';
import Colors from '../../constants/Colors';
import Images from '../../constants/images';
import images from '../../constants/images';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AppText from '../../components/AppText';
import useAuth from './useAuth';
const SignUpScreen = () => {
  const {setUserId} = useAuth();
  const storingKey = values => {
    console.log('valuessssssssssssssss', values);
    setUserId(values.password);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email("well that's not an email"),
    password: Yup.string().required('Password is required'),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match',
    ),
    phone: Yup.string().min(13).max(13).required().label('Phone'),
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        fadeDuration={5}
        blurRadius={8}
        style={{width: '100%', height: '100%'}}
        source={{
          uri: 'https://images.unsplash.com/photo-1584291527905-f930791fb1ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGluZm9ybWF0aW9uJTIwdGVjaG5vbG9neXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500',
        }}>
        <ScrollView>
          <View style={styles.logoContainer}>
            <Image source={images.logo} style={styles.logo} />
            <Text style={styles.title}>GrabYourNotes</Text>
          </View>
          <View style={styles.main}>
            <View style={styles.Appcontainer}>
              <Spacer5 />
              <Text style={styles.signIn}>SignUp</Text>
              <Spacer3 />
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                  passwordConfirmation: '',
                  phone: '',
                }}
                onSubmit={values => storingKey(values)}
                validationSchema={validationSchema}>
                {({
                  handleSubmit,
                  handleChange,
                  errors,
                  setFieldTouched,
                  touched,
                }) => (
                  <>
                    <Appcontainer
                      name="email"
                      placeholder="Enter your email"
                      onChangeText={handleChange('email')}
                      onBulr={() => setFieldTouched('email')}
                    />
                    <AppText error={errors.email} visible={touched.password} />
                    <Spacer3 />
                    <Appcontainer
                      name="lock"
                      placeholder="Enter your password"
                      onChangeText={handleChange('password')}
                      onBulr={() => setFieldTouched('password')}
                      keyboardType="numeric"
                    />
                    <AppText
                      error={errors.password}
                      visible={touched.password}
                    />
                    <Spacer3 />
                    <Appcontainer
                      name="lock"
                      placeholder="Re-enter password"
                      onChangeText={handleChange('passwordConfirmation')}
                      onBulr={() => setFieldTouched('passwordConfirmation')}
                      keyboardType="numeric"
                    />
                    <AppText
                      error={errors.passwordConfirmation}
                      visible={touched.passwordConfirmation}
                    />
                    <Spacer3 />
                    <Appcontainer
                      name="phone"
                      placeholder="Enter your phone number"
                      onChangeText={handleChange('phone')}
                      onBulr={() => setFieldTouched('phone')}
                      keyboardType="numeric"
                    />
                    <Spacer3 />
                    <Appcontainer
                      name="phone"
                      placeholder="Enter your phone number"
                      onChangeText={handleChange('phone')}
                      onBulr={() => setFieldTouched('phone')}
                      keyboardType="numeric"
                    />
                    <AppText error={errors.phone} visible={touched.phone} />
                    <Spacer1 />
                    <TouchableOpacity>
                      <Text style={styles.forgotpassword}>Forgot password</Text>
                    </TouchableOpacity>
                    <Spacer8 />
                    <Button1 title={'SignUp'} onPress={handleSubmit} />
                    <TouchableOpacity>
                      <Text style={styles.forgotpassword}>
                        Don't have an account
                      </Text>
                    </TouchableOpacity>
                  </>
                )}
              </Formik>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  main: {
    // height: height(70),
    flex: 0.75,
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingBottom: height(5),
  },

  Appcontainer: {
    marginHorizontal: width(4),
  },
  forgotpassword: {
    fontSize: 14,
    color: '#4067e6',
    textAlign: 'center',
    marginTop: height(1),
  },
  signIn: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.brick,
  },
  logo: {
    width: width(35),
    height: width(35),
    padding: height(12),
  },
  title: {
    fontSize: width(8),
    fontWeight: '900',
    color: Colors.white,
  },
  logoContainer: {
    // height: height(30),
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
